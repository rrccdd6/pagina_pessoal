
  const form = document.querySelector('form');
  const submitBtn = document.getElementById('submit-btn');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede o envio do formulário padrão
    
    const formData = new FormData(this); // obtém os dados do formulário
    
    // aqui você pode enviar os dados do formulário para o seu servidor via AJAX ou fazer o que quiser com eles
    
    // por exemplo, você pode imprimir os dados do formulário no console do navegador
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
    
    // reinicia o formulário
    this.reset();
    
    // exibe uma mensagem de confirmação para o usuário
    alert('Obrigado por entrar em contato!');
  });
