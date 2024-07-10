import React from 'react'
import styles from './get.module.css'

export default function GetStarted() {
  return (
    <div className={styles.form}>
        
            <form>
                <fieldset>
                    <legend>Create a new task</legend>

                <ul>
                    <li><input type='text' name='title' id='title' placeholder='task tile' defaultValue={''} required/></li>
                    <li><input type='text' name='description'id='decription' placeholder='task decription' defaultValue={''} required/></li>
                    <li><input type='date' name='date' id='date' defaultValue={''} required/></li>
                    <li><button className=''>Create Task</button></li>

                </ul>
                </fieldset>
            </form>
        
        
    </div>
  )
}
