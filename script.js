async function typeSentence(divRef, text, delay = 25) {
    let done = false;
    // console.log(done)
    const button = document.getElementById('skip-effect');
    let buttonClicked = false;
    for (let sentence = 0; sentence < text.length; sentence++) {
        let tagParagraph = document.createElement('p'); // novo item adicionado
        divRef.appendChild(tagParagraph); // pega o novo item e adiciona no elemento pai

        const letters = text[sentence].split("");

        button.addEventListener('click', () => {
            buttonClicked = true;
        })
        if (buttonClicked) {
            tagParagraph.append(text[sentence]);
        }
        else {
            for (let i = 0; i < letters.length; i++) {
                if (buttonClicked) {
                    tagParagraph.append(letters[i]);
                }
                else {
                    await waitForMs(delay);
                    tagParagraph.append(letters[i]);
                }
            }
        }
        let jumpLine = document.createElement('br'); // novo item adicionado
        divRef.appendChild(jumpLine);
    }

    done = true;
    // console.log(done)
    showDiv('name');
}

function showDiv(div) {
    document.getElementById(div).style.display = 'block';
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const paragraphs = ['VEM PARA A AUREM!', 'A Aurem está revolucionando a inclusão no Brasil, utilizando \
a tecnologia como principal ferramenta. Diminuímos as barreiras da comunicação e conectamos pessoas. \
Isso é só o começo!', 'VEM FAZER PARTE DESSA REVOLUÇÃO!']


const typingText = document.querySelector('#apresentation-text') // elemento pai
typeSentence(typingText, paragraphs)


function changeState(element) {
    document.getElementById(element).style.display = 'block';
}

function checkForm() {
    var name = document.getElementById('firstName').value;
    var surname = document.getElementById('lastName').value;
    var email = document.getElementById('email-input').value;
    var curriculum = document.getElementById('CV').value;
    var updates = document.getElementById('news').value;
    const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    const updatesRegex = /^\bs?$|^\bn?$/;

    // Primeira condição: se algum dos campos obrigatórios não for preenchido, emitir um alerta
    if (name === '' || surname === '' || email === '' || curriculum === '' || updates === '') {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return false;
    }

    // Segunda condição: verificar se os campos específicos estão nos formatos corretos. Se não, emitir alerta
    if (email.match(emailRegex))
        console.log('true')
    else alert('E-mail inválido!')

    if (updates.match(updatesRegex))
        console.log('true')
    else alert("Digite apenas 's' ou 'n'! ;)")

    // Última condição: se estiver tudo correto, emitir alerta que os dados foram enviados
    if (emailRegex.test(email) && updatesRegex.test(updates)) {
        let name = document.getElementById("firstName");
        if (name.value != '') {
            alert('Valeu, ' + name.value + '! Seus dados foram enviados com sucesso!')
        }
    }
}

const form = document.getElementById('form')
form.addEventListener('submit', e => {
    e.preventDefault()
})