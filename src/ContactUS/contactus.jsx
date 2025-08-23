function ContactUs(){
    return (
        <div id="Contact">
            <section>
                <form action="" id="contactUs">
                    <h2>Send Us a Message</h2>
                    <p>Send us a message and we will respond in 24h.</p>    
                    <div>
                        <fieldset>
                            <legend>Your Name</legend>
                            <label htmlFor="">First Name:
                                <input type="text" />
                            </label>
                            <label htmlFor=""> Last Name:
                                <input type="text" />
                            </label>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <legend>Contact details</legend>
                            <label htmlFor=""> Email:
                                <input type="email" placeholder="myemail@gmail.com" />
                            </label>
                            
                            <label htmlFor=""> Phone Number:
                                <input type="number" />
                            </label>
                        </fieldset>
                    </div>
                    <textarea name="" placeholder="Type your message here" id=""></textarea>
                    <button>Send</button>
                </form>
            </section>
            <section id="contactMine">
                <h2>Contact Information</h2>
                <p>ndongajared@gmail.com</p>
                <p>+375-25-697-8184</p>
            </section>
        </div>
    )
}

export default ContactUs;