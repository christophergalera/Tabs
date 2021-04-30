import React, {useState} from 'react';

const Tabs = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    console.log(props);
    
    return(
    <div >
        <header className="Header"> 
        {props.tabItems.map((tab,i) => {
            const labelStyles = {
                padding:20, 
                marginRight:10, 
                border:"1px solid gray"
            };

            if (selectedIndex === i) {
                labelStyles.backgroundColor = "black";
                labelStyles.color = "white";
            }
            
            return(
                <span 
                key= {i}
                onClick= {(event) => {
                    setSelectedIndex(i);
                    props.tabItems[i].callback();
                }} 
                style= {labelStyles}>
                
                {tab.label}
        
                </span>
            );
            })}
        </header>
        <main style={{margin:"50px", marginLeft:"auto", marginRight:"auto", width:"50%", marginTop: 40, padding:20, border:"1px solid gray"}}>
            <h3> {props.tabItems[selectedIndex].content}</h3>
        </main>
    </div>
    );
};

export default Tabs;