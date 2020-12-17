import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  
  render() {
    return html`
    <form id="userForm" method="POST">
    <div>
      <label for="username">Username</label>
      <input id="username" name="username" type="text" value="${this.user.uname}">
      <input id="uid" name="uid" value="${this.user.uid}">
    </div>
    <div>
      <label for="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" value="${this.user.firstName}">
    </div>
    <div>
      <label for="lastName">Last Name</label>
      <input id="lastName" name="lastName" type="text" value="${this.user.lastName}">
    </div>
    <div>
      <label for="oldpassword">Old Password</label>
      <input type="password" id="oldpassword" name="oldpassword" type="text" value="">
    </div>
    <div>
      <label for="newpassword">New Password</label>
      <input type="password" id="newpassword" name="newpassword" type="text" value="">
    </div>
      <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" value="Edit User"></input>
    </form>
    `;
  }

  updateUser(e) {
    const formData = new FormData(e.target.form);
    console.log(e)
    fetch('api/updateUser.php', {
     method: 'POST',
     body: formData
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("The user was successfully updated");
        } else {
            console.log("The user was not successfully updated");
        }
      })
  }

}
customElements.define('edit-user', EditUser);
