import smtplib, ssl
import os

port = 465
smtp_server = "smtp.gmail.com"

USER_EMAIL = os.environ.get("USER_EMAIL")
USER_PASSWORD = os.environ.get("USER_PASSWORD")

message = "Test failed."

RECIPIENTS = []
RECIPIENTS.append("ngggslim@gmail.com")
RECIPIENTS.append("nguyenhoangtien100501@gmail.com")

context = ssl.create_default_context()

server = smtplib.SMTP_SSL(smtp_server, port, context=context)

server.login(USER_EMAIL, USER_PASSWORD)

for recipient in RECIPIENTS:
    header = 'To:' + recipient + '\n' + 'From: ' + USER_EMAIL + '\n' + 'Subject: TEST FAILED \n'
    msg = header + message
    server.sendmail(USER_EMAIL, recipient, msg)
