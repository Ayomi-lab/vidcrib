import '../styles/globals.css'
import { WebBundlr } from "@bundlr-network/client"
import { MainContext } from '../context'
import { useState, useRef } from 'react'
import { providers, utils } from 'ethers'
import { LivepeerConfig } from '@livepeer/react'
import '../styles/globals.css'
import {
  createReactClient,
  studioProvider,
 } from '@livepeer/react';

 const client = createReactClient({
  provider: studioProvider({ apiKey: '1c364b21-8b91-4786-a662-928435ee9217' }),
});

function MyApp({ Component, pageProps }) {
  const [bundlrInstance, setBundlrInstance] = useState()
  const [balance, setBalance] = useState()
  const bundlrRef = useRef()
  async function initialiseBundlr() {
    await window.ethereum.enable()
  
    const provider = new providers.Web3Provider(window.ethereum);
    await provider._ready()
  
    const bundlr = new WebBundlr("https://node1.bundlr.network", "matic", provider)
    await bundlr.ready()
    
    setBundlrInstance(bundlr)
    bundlrRef.current = bundlr
    fetchBalance()
  }

  async function fetchBalance() {
    const bal = await bundlrRef.current.getLoadedBalance()
    console.log('bal: ', utils.formatEther(bal.toString()))
    setBalance(utils.formatEther(bal.toString()))
  }

  return (
    <><>
    </><div style={containerStyle}>
        <MainContext.Provider value={{
          initialiseBundlr,
          bundlrInstance,
          balance,
          fetchBalance
        }}>
          <Component {...pageProps} />

          <LivepeerConfig client={client}>

        <Component {...pageProps} />
      </LivepeerConfig>
        </MainContext.Provider>
      </div></>
  )
}

const containerStyle = {
  width: '900px',
  margin: '0 auto',
  padding: '40px'
}

export default MyApp

