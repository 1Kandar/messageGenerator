const messages=["To live is the rarest thing in the world. Most people exist, that is all.","Be yourself; everyone else is already taken.","True friends stab you in the front.", "Women are made to be Loved, not understood.","Be the change that you wish to see in the world.","Live as if you were to die tomorrow. Learn as if you were to live forever.","No one can make you feel inferior without your consent.","Great minds discuss ideas; average minds discuss events; small minds discuss people.","Do what you feel in your heart to be right - for you'll be criticized anyway.","Do one thing every day that scares you.","Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.","Our lives begin to end the day we become silent about things that matter.","In the end, we will remember not the words of our enemies, but the silence of our friends.","Injustice anywhere is a threat to justice everywhere.", "The time is always right to do what is right.","Life's most persistent and urgent question is, 'What are you doing for others?","Weak people revenge. Strong people forgive. Intelligent People Ignore.","I have not failed. I've just found 10,000 ways that won't work.","Genius is one percent inspiration and ninety-nine percent perspiration.","Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."]




document.querySelector("button").addEventListener("click",clicked)


const messageSelector= num =>{
    return messages[num]
    
}


function clicked(){
  
    
    document.querySelector("#message").innerHTML=messageSelector(Math.floor(Math.random()*messages.length))
}

