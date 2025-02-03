// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Profile from './components/profile_props'
import Gallery from './qcomps/state'
import Holder from './components/square'
import RecipeList from './qcomps/recipes'
import Form from './qcomps/stuckForm'
import Scoreboard from './qcomps/updObjectsForm'
import List from './qcomps/artistsRemoveArr'
import BucketList from './qcomps/arrObj'
import RequestTracker from './qcomps/shoppingCart'

export default function Home() {
  return (
    <RequestTracker />
  )
}
