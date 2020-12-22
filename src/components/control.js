import React from 'react'
import { RiSettings4Fill } from 'react-icons/ri';
import { IoSearchSharp, IoNotificationsSharp } from 'react-icons/io5';
import { AiFillProfile } from 'react-icons/ai';
import { IconContext } from 'react-icons';

class ControlPanel extends React.Component {
    render() {
        return (
            <div className="control_panel">
                <div className="control_icon">
                    <IconContext.Provider
                        value={{size: '2.3vmin', fontWeight: 500, padding: 0 }}
                    >
                    <IoNotificationsSharp />
                    </IconContext.Provider>
                </div>
                <div className="control_icon">
                    <IconContext.Provider
                        value={{size: '2.3vmin', fontWeight: 500, padding: 0 }}
                    >
                    <AiFillProfile />
                    </IconContext.Provider>
                </div>
                <div className="control_icon">
                    <IconContext.Provider
                        value={{size: '2.3vmin', fontWeight: 500, padding: 0 }}
                    >
                    <IoSearchSharp />
                    </IconContext.Provider>
                </div>
                <div className="control_icon">
                    <IconContext.Provider
                    value={{size: '2.3vmin', fontWeight: 500, padding: 0 }}
                    >
                    <RiSettings4Fill />
                    </IconContext.Provider>
                </div>
            </div>
        )
    }
}

export default ControlPanel