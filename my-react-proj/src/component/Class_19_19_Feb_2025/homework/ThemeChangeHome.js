import React, {createContext, useContext, useState} from "react";

const ThemeContext = createContext();
const UserContext = createContext();
const PageContext = createContext();

const ThemeProvider = ({children}) => {
    const[theme, setTheme] = useState("theme1");

    const toggleTheme = () => {
        setTheme(theme === "theme1" ? "theme2" : "theme1");
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

const PageProvider = ({children}) => {
    const[page, setPageColor] = useState("dark");

    const togglePgBg = () => {
        setPageColor(page === "dark" ? "light" : "dark");
    }

    return (
        <PageContext.Provider value={{page, togglePgBg}}>
            {children}
        </PageContext.Provider>
    );
}

const UserProvider = ({children}) => {
    const[user1] = useState({name: "Praggy", country: "Tamilnadu"});
    const[user2] = useState({name: "Gukesh", country: "Andhra Pradesh"});

    return (
        <UserContext.Provider value={{user1, user2}}>
            {children}
        </UserContext.Provider>
    );
}

const ContentDiv = () => {
    const {page, togglePgBg} = useContext(PageContext);
    const {theme, toggleTheme} = useContext(ThemeContext);
    const {user1, user2} = useContext(UserContext);

    return (
        <div style={page === "dark" ? styles.containerLight : styles.containerDark}>
            <h2>Welcome to the Grand Finale!</h2>
            <div style={styles.outerplayer}>
                <div style={styles.player}>
                    <h2>Player 1: {user1.name}</h2>
                    <p>State: {user1.country}</p>
                    <button onClick={togglePgBg}>Toggle Page BG</button>
                </div>
                <div style={styles.player}>
                    <h2>Player 2: {user2.name}</h2>
                    <p>State: {user2.country}</p>
                    <button onClick={toggleTheme}>Toggle Theme</button>
                </div>
            </div>

            <div style={styles.outer}>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>1</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>2</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>3</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>4</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>5</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>6</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>7</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>8</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>9</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>10</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>11</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>12</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>13</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>14</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>15</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>16</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>17</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>18</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>19</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>20</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>21</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>22</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>23</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>24</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>25</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>26</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>27</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>28</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>29</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>30</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>31</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>32</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>33</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>34</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>35</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>36</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>37</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>38</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>39</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>40</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>41</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>42</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>43</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>44</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>45</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>46</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>47</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>48</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>49</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>50</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>51</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>52</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>53</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>54</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>55</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>56</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>57</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>58</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>59</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>60</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>61</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>62</div>
                <div style={theme === "theme1" ? styles.theme3 : styles.theme4}>63</div>
                <div style={theme === "theme1" ? styles.theme1 : styles.theme2}>64</div>
            </div>            
        </div>
    );
}

const ThemeChangeHome = () => {
    return (
        <PageProvider>
            <ThemeProvider>
                <UserProvider>
                    <ContentDiv />
                </UserProvider>
            </ThemeProvider>
        </PageProvider>
    );
}

const styles = {
    containerLight: {textAlign: "center", padding:"10px 10px 10px 10px", background: "lightblue", width: "100%", height: "100%"},
    containerDark: {textAlign: "center", padding:"10px 10px 10px 10px", background: "cornflowerblue", width: "100%", height: "100%"},
    outerplayer: {display: "flex", marginLeft: "35%"},
    player: {margin: "50px", padding: "10px"},
    outer: {display: "grid", gridTemplateColumns: "50px 50px 50px 50px 50px 50px 50px 50px", gridTemplateRows: "50px 50px 50px 50px 50px 50px 50px 50px", marginLeft: "40%", marginTop: "5px", marginBottom: "10%",},
    theme1: {background: "black", color: "darkgray"},
    theme2: {background: "darkgreen", color: "white"},
    theme3: {background: "darkgray", color: "black"},
    theme4: {background: "lightgreen", color: "black"},
}

export default ThemeChangeHome;

/*

import './App.css';
import React from 'react';
import ThemeChangeHome from './component/Class_19_19_Feb_2025/homework/ThemeChangeHome';

class App extends React.Component {
  render() {
    return (
      <div>
        <ThemeChangeHome />
      </div>
    )
  }
}

export default App;

*/