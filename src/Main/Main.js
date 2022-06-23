import Form from './Form'
import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.maindiv}>
        <div>
            <h1>Welcome</h1>
            <h2>Hope you enjoy our website</h2>
                <p>Here you will have great experiences.</p>
        </div>
              <Form user={{email: "islan@hotmail.com", password: "123456"}}/>  
    </div>
  )
}

export default Main