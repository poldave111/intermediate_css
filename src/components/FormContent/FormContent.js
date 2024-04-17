import React, { useState } from 'react';
import styles from './FormContent.module.scss';

const FormContent = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', { name, email, subject, message });
        // Clear form fields after submission
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className={styles["form-container"]}>
            <div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" />
                        <input
                            placeholder='Your name'
                            className={styles.input}
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" />
                        <input
                            placeholder='Your e-mail'
                            className={styles.input}
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" />
                        <input
                            placeholder='Subject'
                            className={styles.input}
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" />
                        <textarea
                            placeholder='Type your message here'
                            className={styles.textarea}
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button className="btn btn-submit" type="submit">Submit</button>
                </form>
            </div>

            <div className={styles["form-text"]}>
                <div className={styles["form-paragraph"]}>
                    <h3>sale specialist</h3>
                    <p>Ellmor Kinder</p>
                </div>
                <div className={styles["form-paragraph"]}>
                    <h3>address</h3>
                    <p>299 Browning Lane</p>
                    <p>Cortland</p>
                    <p>13845 New York</p>
                </div>
                <div className={styles["form-paragraph"]}>
                    <h3>phone</h3>
                    <p>687-835-7016</p>
                </div>

            </div>
        </div>

    )
}

export default FormContent; 