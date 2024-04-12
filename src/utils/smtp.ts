interface EmailData {
  To?: string;
  Subject?: string;
  From?: string;
  Body?: string;
  Host?: string
  Username?: string;
  Password?: string;
  Action?: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

export class Email {
  static send(data: EmailData): Promise<EmailResponse> {
    return new Promise((resolve, reject) => {
      data.To = "marioleitecomercial@gmail.com"
      data.Username = "marioleitecomercial@gmail.com"
      data.Host = "smtp.elasticemail.com";
      data.Password = "A8CDE515B1523F91F6EC8C3917291310D45C"
      data.From = "marioleitecomercial@gmail.com"
      data.Action = "Send"
      console.log(data)
      const requestData = JSON.stringify(data);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", requestData, (response) => {
        resolve({ success: true, message: response });
      }, (error) => {
        reject({ success: false, message: error });
      });
    });
  }

  private static ajaxPost(url: string, requestData: string, successCallback: (response: string) => void, errorCallback: (error: string) => void): void {
    const request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onload = () => {
      if (request.responseText) {
        successCallback(request.responseText);
      } else {
        errorCallback("Empty response received");
      }
    };
    request.onerror = () => {
      errorCallback("Error occurred during request");
    };
    request.send(requestData);
  }
}
