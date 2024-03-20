import { Component, createRouter } from "../core/heropy"
import Home from "./Home"
import NewProfile from "./NewProfile"

export default createRouter([
  { path: '#/', component: Home },
  { path: '#/newProfile', component: NewProfile }
])