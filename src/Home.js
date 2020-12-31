import React , {useState} from 'react'
import {Tabs , Tab , AppBar} from "@material-ui/core"
function Home() {
    const [selectedTab, setselectedTab] = useState(0)
    const handleChange = (event , newValue) => setselectedTab(newValue)
    return (
    <Tabs value={selectedTab} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="About"/>
        <Tab label="Contact us" />
         
    </Tabs>
    )
}

export default Home
 