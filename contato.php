<?

$nome=$_POST['nome'];

$email=$_POST['email'];

$mensagem=$_POST['mensagem'];

$assunto=$_POST['assunto'];

$Destinatario="biachiarelli@gmail.com";

$Titulo="Nova mensagem da GitHub Page";


$mensagem1="

Assunto: $assunto

Nome: $nome

Email: $email

Mensagem: $mensagem";


mail("$Destinatario","$Titulo", "$mensagem1","From:$email");

echo "<script>window.location='contato.html';alert('$nome, sua mensagem foi enviada com sucesso!');</script>";
?>
