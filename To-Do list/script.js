$(document).ready(()=>{
    $('#topic').val(null);
    $('#content').val(null);
    $('#topic').val('');
    let x = 0;
    let id = 0;
    $('#submit').on('click', ()=>{
        
        let title = $('#title').val();
        let content = $('#content').val();
        let topic = $('#topic').val();
        
        if(title===''){
            title='Titleless';
        }
        
        if(content===''){
            content='Contentless';
        }
        
        if(topic===null){
            topic='topicless';
        }
        
        title = title.slice(0,10);
        content = content.slice(0,20);
        
        $('#title').val('');
        $('#content').val('');
        $('#topic').val('');
        
        const card = document.createElement('DIV');
        const cardContent = document.createElement('DIV');
        const titleNode = document.createElement('DIV');
        const contentNode = document.createElement('DIV');
        const topicNode = document.createElement('DIV');
        
        const titleText = document.createTextNode(title);
        const contentText = document.createTextNode(content);
        const topicText = document.createTextNode(topic);
        
        titleNode.appendChild(titleText);
        contentNode.appendChild(contentText);
        topicNode.appendChild(topicText);
        
        card.classList.add('card');
        cardContent.classList.add('card-content');
        titleNode.classList.add('card-data');  
        titleNode.classList.add('card-title');
        contentNode.classList.add('card-data');
        topicNode.classList.add('card-data');
        
        const xButton = document.createElement('button');
        const xButtonContent = document.createTextNode('×');
        xButton.style.background = 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))';
        xButton.style.position = 'absolute';
        xButton.style.right = '50px';
        xButton.style.top = '50px';
        xButton.style.padding = '0px';
        xButton.style.border = 'none';
        xButton.style.width = '80px';
        xButton.style.height = '80px';
        xButton.style.fontSize = '50px';
        xButton.type = 'button';
        xButton.style.borderRadius = '80px';
        xButton.id = `close${id}`;
        xButton.addEventListener('click',(x)=>{x.target.parentElement.parentElement.style.display = 'none';})
        xButton.appendChild(xButtonContent);
        cardContent.appendChild(xButton);
        
        cardContent.style.position = 'relative';
        
        cardContent.appendChild(titleNode);
        cardContent.appendChild(contentNode);
        cardContent.appendChild(topicNode);
        
        const classes = ['card-red', 'card-orange', 'card-yellow', 'card-lime', 'card-cyan', 'card-blue', 'card-purple'];
        
        card.classList.add(classes[x]);
        card.classList.add(`.card${id}`);

        x++;
        if(x>=7){
            x=0;
        }
        id++;
        
        const cards = document.getElementById('cards');
        
        card.appendChild(cardContent);
        cards.appendChild(card);
        
    });
});