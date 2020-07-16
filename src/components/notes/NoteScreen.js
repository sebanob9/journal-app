import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                    <input
                        type="text"
                        placeholder="awesome title!"
                        className="notes__content-input"
                    />

                    <textarea
                        placeholder="What happened today?"
                        className="notes__content-textarea"
                    >

                    </textarea>

                    <div className="notes__image ">
                        <img
                        alt="imagen"
                        src="https://zone1-ibizaspotlightsl.netdna-ssl.com/sites/default/files/styles/embedded_auto_740_width/public/article-images/131829/coupon-1530110065.jpg?itok=pNpEP4Vu"/>
                    </div>
            </div>
        </div>
    )
}
