import { Component, createRouter } from "../core/base"
import Home from "./Home"
import NewProfile from "./NewProfile"
import ViewProfile from "./ViewProfile"

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/newProfile', component: NewProfile },
  { path: '#/viewProfile', component: ViewProfile }
])