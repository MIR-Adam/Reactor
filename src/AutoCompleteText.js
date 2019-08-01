import React from 'react';

export default function AutoCompleteText(props) {

        let { sections} = props
            return (
                <div>
                    <ul>
                        {sections.map((suggestSection) => (<li key = {suggestSection.id}>{suggestSection.title}</li>))}
                    </ul>
                </div>
            )
    }
