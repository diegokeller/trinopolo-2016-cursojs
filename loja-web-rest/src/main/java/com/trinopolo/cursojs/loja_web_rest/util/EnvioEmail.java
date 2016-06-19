package com.trinopolo.cursojs.loja_web_rest.util;

import java.util.Properties;
import java.util.logging.Logger;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

/**
 * Classe útil para envio de emails.
 * 
 * @author Diego
 *
 */
public class EnvioEmail {

	private static final String SMTP_PASSWORD = "treinamento";

	private static final String SMTP_USER = "treinamentojavaflexxo";

	private static final String SMTP_PORT = "587";

	private static final String SMTP_SERVER = "smtp.gmail.com";

	private static Logger logger = Logger.getLogger(EnvioEmail.class.getCanonicalName());

	/**
	 * Envia um email.
	 * 
	 * @param destinatario
	 * @param assunto
	 * @param mensagem
	 * @throws MessagingException
	 * @throws BusinessException
	 */
	public static void enviarEmail(String destinatario, String assunto, String mensagem) throws MessagingException {

		// Cria objeto de propriedades
		Properties propriedades = System.getProperties();

		// Define modo seguro
		propriedades.put("mail.smtp.starttls.enable", "true");

		// Define servidor
		propriedades.put("mail.smtp.host", SMTP_SERVER);

		// Define porta
		propriedades.put("mail.smtp.port", SMTP_PORT);

		// Define remetente
		propriedades.put("mail.smtp.user", SMTP_USER);

		// Define senha
		propriedades.put("mail.smtp.password", SMTP_PASSWORD);

		// Usar autenticação = SIM
		propriedades.put("mail.smtp.auth", "true");

		// Cria sessão
		Session session = Session.getDefaultInstance(propriedades, null);

		// Cria mensagem
		MimeMessage message = new MimeMessage(session);

		// Define remetente
		message.setFrom(new InternetAddress("FTEC <treinamentojavaflexxo@gmail.com>"));

		// Adiciona o destinatário
		message.addRecipients(Message.RecipientType.TO, destinatario);

		// Define o título do email
		message.setSubject(assunto);

		// Define a mensagem do email
		message.setContent(mensagem, "text/html; charset=utf-8");

		// Cria o transporte SMTP
		Transport transport = session.getTransport("smtp");

		// Conecta
		logger.info("Conectando ao servidor.");
		transport.connect(SMTP_SERVER, SMTP_USER, SMTP_PASSWORD);

		// Envia a mensagem
		logger.info("Enviando a mensagem.");
		transport.sendMessage(message, message.getAllRecipients());

		// Desconecta
		logger.info("Desconectando.");
		transport.close();
		logger.info("FIM.");

	}
}
