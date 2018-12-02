$(document).ready(()=>{
    $('#topic').val(null);
    $('#content').val(null);
    $('#topic').val('');
    let x = 0;
    //localStorage.setItem('items-currently',0);
    //localStorage.clear();
    let id = localStorage.getItem('items-currently');
    if(!id){
        id = 0;
    }
    
    const createCard = (title, content, topic, color) => {
        const card = {
            maincontainer: document.createElement('DIV'),
            subcontainer: document.createElement('DIV'),
            contentcontainers: [
                document.createElement('DIV'),
                document.createElement('DIV'),
                document.createElement('DIV')
            ],
            content: [
                document.createTextNode(title),
                document.createTextNode(content),
                document.createTextNode(topic),
            ],
            button: document.createElement('button'),
            color: color
        }
        return card;
    };
    
    const threadCard = (new_card) => {
            for(let i in new_card.contentcontainers){
                new_card.contentcontainers[i].appendChild(new_card.content[i]);
                console.log(i);
            }

            new_card.maincontainer.classList.add('card');
            new_card.subcontainer.classList.add('card-content');

            new_card.contentcontainers[0].classList.add(`card-title`);
            new_card.contentcontainers[0].classList.add(`card-data`);
            new_card.contentcontainers[1].classList.add(`card-data`);
            new_card.contentcontainers[2].classList.add(`card-data`);

            new_card.button.appendChild(document.createTextNode('×'));
            new_card.button.classList.add('button-x');
            new_card.button.type = 'button';
            new_card.button.id = `close${id}`;
            new_card.button.addEventListener('click',(x)=>{
                const n = x.target.parentElement.parentElement.id;
                const arr = [`title${n}`, `content${n}`, `topic${n}`, `color${n}`];
                id--;   
                for(let i in arr){
                    localStorage.removeItem(arr[i]);
                    console.log(arr[i]);
                }
                x.target.parentElement.parentElement.style.display = 'none'; 
                localStorage.setItem('items-currently',id);
            });
            new_card.subcontainer.style.position = 'relative';
            new_card.subcontainer.appendChild(new_card.button);

            for(let i=0;i<3;i++){
                new_card.subcontainer.appendChild(new_card.contentcontainers[i]);
            }

            new_card.maincontainer.classList.add(new_card.color);
            const cards = document.getElementById('cards');
            
            new_card.maincontainer.appendChild(new_card.subcontainer);
            cards.appendChild(new_card.maincontainer);
        }
    
    const appendCardClassically = () => {
        let title = $('#title').val();
        let content = $('#content').val();
        let topic = $('#topic').val();
        let color;
        
        $('#title').val('');
        $('#content').val('');
        $('#topic').val('');
        
        if(title===''){
            title='Titleless';
        }
        
        if(content===''){
            content='Contentless';
        }
        
        if(topic===null){
            topic='topicless';
        }
        
        title = title.slice(0,20);
        content = content.slice(0,25);
        
        const classes = ['card-red', 'card-orange', 'card-yellow', 'card-lime', 'card-cyan', 'card-blue', 'card-purple'];
        color = classes[x];
        x++;
        if(x>=7){
            x=0;
        }
        
        const new_card = createCard(title, content, topic, color);
        
        threadCard(new_card);
        
        id++;
        new_card.maincontainer.id = `${id}`;
        localStorage.setItem('items-currently', id);
        localStorage.setItem(`title${id}`, title);
        localStorage.setItem(`content${id}`, content);
        localStorage.setItem(`topic${id}`, topic);
        localStorage.setItem(`color${id}`, color);
    }
    
    const appendCardsFromStorage = () => {
        const how_many = localStorage.getItem('items-currently');
        console.log(how_many);
        for(let i = 1;i <= how_many; i++){
            const title = localStorage.getItem(`title${i}`);
            const content = localStorage.getItem(`content${i}`);
            const topic = localStorage.getItem(`topic${i}`);
            const color = localStorage.getItem(`color${i}`);
            console.log(`${color} ${title} ${content} ${topic}`);
            const new_card = createCard(title, content, topic, color);
            threadCard(new_card);
        }
    }
    
    if(id>0){
        appendCardsFromStorage();
    }
    
    $('#submit').on('click', ()=>{
        appendCardClassically();
    });
});