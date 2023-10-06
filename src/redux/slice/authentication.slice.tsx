import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth"
import { auth } from "../../../config/firebase.config"

interface userProps {
  accessToken: string
  displayName: string
  email: string
  uid: string
  type: string
}
interface AuthState {
  user: userProps
  loading: boolean
  success: boolean
  type: string
}
const initialUser: userProps = {
  accessToken: "",
  displayName: "",
  email: "",
  uid: "",
  type: "",
}

const initialState: AuthState = {
  user: initialUser,
  loading: false,
  success: false,
  type: "",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true
    },
    signInSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false
      state.success = true
      state.user.accessToken = action.payload.accessToken
      state.user.displayName = action.payload.displayName
      state.user.email = action.payload.email
      state.user.uid = action.payload.uid
      state.user.type = action.payload.type
    },
    signInFailure: (state) => {
      state.loading = false
    },
    logOut: (state) => {
      state.user = initialUser
    },
  },
})

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
          //  admin:admin?.admin
        })
      )
    } catch (error) {
      dispatch(signInFailure())
      console.error("Sign-in error:", error)
    }
  }

export const logoutUser = (dispatch?: any) => {
  dispatch(logOut())
}
export const { signInStart, signInSuccess, signInFailure, logOut } =
  authSlice.actions
export default authSlice.reducer
