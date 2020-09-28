import React from 'react';
import faker from 'faker';

const Comments = (props) => {
    return (
        <div className="large ui comments">
            <div className="comment">
                <div className="avatar">
                    <img alt="profile_pic" src={faker.image.avatar()}/>
                </div>
                <div className="content">
                    <span className="author">{faker.name.firstName()}</span>
                    <div className="metadata">
                        <p className="date">
                            {new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()}
                        </p>
                    </div>
                    <div className="text" style={{marginBottom: '-16px'}}>
                       {faker.lorem.lines()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments;