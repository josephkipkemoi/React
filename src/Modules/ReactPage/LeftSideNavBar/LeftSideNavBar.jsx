import React, {useState} from "react";
import './LeftSideNavBar.css';
import { Collapse, Nav, Button } from "react-bootstrap";
import MockData from '../../../Data/React.json';

export const SideNavBar = () => {
    const [open, setOpen] = useState([true]);

    const SubTopics = () => {
    return  MockData.data.map((data, key) => {
          const {topic, subtopic} = data;
        //   const [{title}] = subtopic;
          return (
              <React.Fragment key={"d" + key}>
                <Button
                    onClick={() => IsOpen(key)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open[key]}
                    variant="light"
                    className="m-2 custom-btn-position d-flex align-items-center"
                >
                     {IsBasicsOpen(key)}
                    {topic}
                </Button>
                <Collapse in={open[key]}>
                    <div id="example-collapse-text">
                        {subtopic.map(({title}, key) => {
                            return <Button key={"ek" + key} variant="white">{title}</Button>                  
                        })}
                    </div>          
                </Collapse>
              </React.Fragment>
          )
      })
       
    }    

    const IsOpen = (key) => {
        const newItem = [...open]
        newItem[key] = !newItem[key]
        setOpen(newItem)
    }

    const IsBasicsOpen = (key) =>  ( 
                                open[key] ? 
                                <i className="bi bi-arrow-down-circle custom-icon-position" style={{ fontSize: '18px' }}></i> : 
                                <i className="bi bi-arrow-right-circle custom-icon-position" style={{ fontSize: '18px' }}></i>
                                )

    return (
        <>
          <Nav 
            className="flex-column shadow-sm p-2"
            >       
            <SubTopics/>
                
            </Nav>
        </>
    )
}