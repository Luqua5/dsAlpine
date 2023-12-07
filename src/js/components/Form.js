export default function Form() {
    return {
        isVerified:false,
        isNotVerified:false,
        nameForm: "",
        email: "",
        tel: "",
        message: "",

        submitVerification() {
            if (this.nameForm === "" || this.email === "" || this.tel === "" || this.message === "") {
                this.isNotVerified = true;
                setTimeout(() => {
                    this.isNotVerified = false;
                }, 2000);
            } else {
                this.isVerified = true;
                setTimeout(() => {
                    this.isVerified = false;
                }, 2000);
            }
        }
    }
}
