import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage: 'url(https://ssl.quiksilver.com/static/QS/default/category-assets/marketing-landing/landing/img/surf/tiles/surf_featured_1.jpg)'
                }}
            />
            <div className="journal__entry-body">
                <p className="journal__entry-title">Nuevo dia</p>
                <p className="journal__entry-content">
                    Anim voluptate culpa sunt reprehenderit sit ea nostrud proident exercitation tempor culpa mollit magna ad.
                </p>
            </div>

            <div className="journal__entry-date">
                <span>weekDay</span>
                <h4> 28 </h4>
            </div>
        </div>
    )
}
