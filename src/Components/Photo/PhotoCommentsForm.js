import React from 'react'
import { COMMENT_POST } from '../../Api'
import {ReactComponent as Enviar} from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch'
import Error from '../Helper/Error'
import styles from './PhotoCommentsForm.module.css'

function PhotoCommentsForm({id, setComments}) {
    const [comment, setComment] = React.useState('')
    const {request, error} = useFetch()

    async function handleSubmit(e) {
        e.preventDefault()
        const {url, options} = COMMENT_POST(id, {comment});
        const {response, json} = await request(url, options)
        if(response.ok) {
            setComment('')
            setComments((comments)=> [...comments, json])
        }
    }


    return (
        <form className={styles.form} >
            <textarea 
	     className={styles.textarea}
             id = "comment"
             name = "comment"
             value= {comment}
             placeholder = "Adicione um comentário"
             onChange = {({target})=>setComment(target.value)} 
            />
            <button className={styles.button} onClick = {handleSubmit} >
             <Enviar />
            </button>
            <Error error = {error}/>
        </form>
    )
}

export default PhotoCommentsForm
