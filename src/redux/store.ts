import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/userSlice';
import postSlice from './slice/postSlice';

const store  = configureStore({
    reducer: {
        auth:authSlice,
        post: postSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore actions and state paths related to non-serializable data
                ignoredActions: ['beneficiary/setBeneficiaryData'],
                ignoredActionPaths: ['payload.targetDate'],
                ignoredPaths: ['beneficiary.beneficiaries.targetDate'],
            },
        }),
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;