import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth"
import { auth } from "../../../../config/firebase.config"

interface AuthState {
  user: {
    accessToken: string
    displayName: string
    email: string
    uid: string
  }
  loading: boolean
  success: boolean
}

const initialState: AuthState = {
  user: {
    accessToken: "",
    displayName: "",
    email: "",
    uid: "",
  },
  loading: false,
  success: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true
    },
    signInSuccess: (state, action: PayloadAction<any>) => {
      console.log(">>>>", state, action, action.payload.email)
      state.loading = false
      state.success = true
      state.user.accessToken = action.payload.accessToken
      state.user.displayName = action.payload.displayName
      state.user.email = action.payload.email
      state.user.uid = action.payload.uid
    },
    signInFailure: (state) => {
      state.loading = false
    },
  },
})

export const { signInStart, signInSuccess, signInFailure } = authSlice.actions

export const signIn =
  (email: string, password: string): any =>
  async (dispatch: any) => {
    try {
      dispatch(signInStart())
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user: any = userCredential.user
      dispatch(
        signInSuccess({
          accessToken: user.accessToken,
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        })
      )
      global?.window?.localStorage.setItem(
        "userInfo",
        JSON?.stringify({
          token: user?.accessToken,
          userId: user?.uid,
        })
      )
    } catch (error) {
      dispatch(signInFailure())
      console.error("Sign-in error:", error)
    }
  }

export default authSlice.reducer
