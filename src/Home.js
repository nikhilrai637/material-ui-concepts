import React , {useState} from 'react'
import {Tabs , Tab , AppBar} from "@material-ui/core"
import Contact from './Contact'
import About from './About'
function Home() {
    const [selectedTab, setselectedTab] = useState(0)
    const handleChange = (event , newValue) => setselectedTab(newValue)
    return (
    <>
    <AppBar position = "static">
    <Tabs value={selectedTab} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="About"/>
        <Tab label="Contact us" />
    </Tabs>
    </AppBar>
    {selectedTab === 0 && <About/>}
    {selectedTab === 1 && <Contact/>}
    </>
    )
}

export default Home
 