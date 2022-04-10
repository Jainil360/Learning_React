import React from 'react'
import './myStyles.css'
import styles from './appStyles.module.css'

function StyleSheet(props) {
    const primaryClass = props.primaryClass ? 'primary' : '';
  return (
    <div >
        <h1 className={`${primaryClass}  display-1` }>Regular css</h1>
        <h1 className={styles.header}>module css</h1>

    </div>
  )
}

export default StyleSheet