import {baseApi} from "states/baseApi";

export const authenticationEndPoints = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query({...body}) {
                return ({
                    url: `/user/admin/token/`,
                    method: 'POST',
                    data: body,
                    headers: {},
                })
            },
            invalidatesTags: ['datasets','package']
        }),
        signUp: builder.mutation({
            query({...body}) {
                return ({
                    url: `/user/admin/signup/`,
                    method: 'POST',
                    data: body,
                    headers: {},
                })
            },
        }),
        forgetPassword:builder.mutation({
            query({email}) {
                return ({
                    url: `/user/admin/forget-password/`,
                    method: 'POST',
                    data: {email:email},
                    headers: {},
                })
            },
        }),
        resetPassword:builder.mutation({
            query({...body}) {
                return ({
                    url: `/user/admin/reset-password/`,
                    method: 'PUT',
                    data: body,
                    headers: {},
                })
            }
        }),
        activation : builder.mutation({
            query({...body}) {
                return ({
                    url: `/user/admin/activate/`,
                    method: 'POST',
                    data: body,
                    headers: {},
                })
            }
        }),
        changeEmail: builder.mutation({
            query({...body}) {
                return ({
                    url: `/user/admin/change-email/`,
                    method: 'PUT',
                    data: body,
                    headers: {},
                })
            }
        }),
        user: builder.mutation({
            query(token) {
                return ({
                    url: `/user/admin/me/`,
                    method: 'GET',
                    headers: {Authorization: `Token ${token}`},
                })
            }
        }),
        updateUser: builder.mutation({
            query({token,body}) {
                return ({
                    url: `/user/admin/me/`,
                    method: 'PATCH',
                    headers: {Authorization: `Token ${token}`},
                    data:{...body}
                })
            }
        })
    }),
})

export const {
    useLoginMutation,
    useUserMutation,
    useSignUpMutation,
    useActivationMutation,
    useChangeEmailMutation,
    useForgetPasswordMutation,
    useResetPasswordMutation
} = authenticationEndPoints