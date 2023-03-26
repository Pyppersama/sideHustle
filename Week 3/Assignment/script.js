let form = document.getElementById('form');

            let name = document.getElementById('fullName');
            let email = document.getElementById('emailAddress');
            let phone = document.getElementById('phoneNumber');
            let password = document.getElementById('pwd');

            form.addEventListener('submit', e => {
                let allMessages = [];

                if(name.value === '' || name.value === null){
                    allMessages.push("Your Fullname is Required!");
                    
                }else if(email.value === '' || email.value === null){
                    allMessages.push("Your Email is required!");
                }
                else if(phone.value === '' || phone.value === null){
                    allMessages.push("Your Phone Nunmer is required!");
                }
                else if(password.value === '' || password.value === null){
                    allMessages.push("Please input a Password!");
                }else{
                    allMessages.push("This was a Sussessful Registration, Congrats!!");
                }

                alert(allMessages);
            });