import JustValidate from "just-validate";
import intlTelInput from "intl-tel-input";

import { demo, subscribe } from "./modal";

export const validateForms = (
  selector,
  rules,
  onSuccessSend,
  onFailSend,
  options = null,
  translation = null,
  locale = null
) => {
  const form = document?.querySelector(selector);
  const formBtn = form?.querySelector("button");
  const telSelector = form?.querySelector('input[type="tel"]');

  let socialNetwork = "Facebook";
  const modalSocial = document.querySelector(".modal__social");

  if (modalSocial) {
    const modalDropdown = modalSocial.querySelector(".modal__social-dropdown");
    const modalCurrent = modalSocial.querySelector(".modal__social--current");

    modalDropdown.addEventListener("click", (e) => {
      if (
        e.target &&
        (e.target.classList.contains("modal__social-dropdown-item") ||
          e.target.closest(".modal__social-dropdown-item"))
      ) {
        const item = e.target.closest(".modal__social-dropdown-item");

        socialNetwork = item.dataset.social;

        Array.from(modalCurrent.children).forEach((el) => el.remove());

        switch (socialNetwork) {
          case "Skype":
            modalCurrent.insertAdjacentHTML(
              "beforeend",
              `
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse class="icon" cx="11.5" cy="12" rx="8.5" ry="8" />
                  <path
                    d="M10.9692 10.6277C10.0124 10.154 10.5477 9.19086 11.9056 9.19086C13.7798 9.19086 13.1687 10.7098 14.3292 10.7098C15.2956 10.7098 15.6177 9.48139 14.4224 8.55612C13.1261 7.55823 10.115 7.63876 9.08872 8.96033C8.82563 9.30198 8.68126 9.72017 8.67756 10.1514C8.67385 10.5826 8.81101 11.0032 9.06819 11.3493C10.1735 12.7119 12.5829 12.4024 13.4261 13.1809C13.7419 13.4761 13.7987 14.0919 13.2129 14.4835C12.6271 14.8751 11.6008 14.8609 11.1271 14.6414C10.0929 14.1551 10.4166 12.9614 9.3903 12.9614C8.0324 12.9614 8.31187 14.8561 9.88608 15.6914C10.9913 16.2693 12.815 16.2661 13.9235 15.8098C14.9261 15.4024 15.5687 14.6209 15.5703 13.5788C15.5703 11.0524 12.2671 11.2719 10.9692 10.6277Z"
                    class="icon-elem"
                  />
                  <path
                    class="circle"
                    d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519938 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0V0ZM13.1621 17.8958C8.94158 18.6616 5.31316 14.9842 6.1579 10.8679C5.84657 10.3421 5.68292 9.74208 5.68422 9.13105C5.68422 6.40105 8.7379 4.79368 11.0321 6.21632C15.2574 5.50105 18.8542 9.23053 17.94 13.3389C19.4447 16.3263 16.1463 19.4732 13.1621 17.8958Z"
                  />
                </svg>
                `
            );
            break;
          case "Whatsapp":
            modalCurrent.insertAdjacentHTML(
              "beforeend",
              `
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="11.5" cy="12.5" rx="9.5" ry="8.5" class="icon" />
                  <path
                    d="M14.3689 12.6688C14.2903 12.586 14.1916 12.5251 14.0825 12.4919C13.9733 12.4587 13.8574 12.4544 13.746 12.4794C13.6347 12.5043 13.5317 12.5578 13.4472 12.6344C13.3626 12.711 13.2994 12.8083 13.2637 12.9167C13.2072 13.0696 13.0972 13.1969 12.9541 13.275C12.811 13.3531 12.6444 13.3767 12.4853 13.3414C11.7763 13.1646 10.821 12.2361 10.6442 11.5019C10.601 11.3422 10.621 11.172 10.7001 11.0267C10.7793 10.8815 10.9114 10.7723 11.0689 10.7219C11.1753 10.6861 11.2708 10.6237 11.3463 10.5407C11.4218 10.4576 11.4748 10.3566 11.5003 10.2473C11.5257 10.138 11.5228 10.0239 11.4918 9.91605C11.4608 9.80817 11.4028 9.71 11.3232 9.63087L10.3316 8.63929C10.2013 8.51957 10.0309 8.45312 9.85394 8.45312C9.67703 8.45312 9.50656 8.51957 9.37631 8.63929L8.70368 9.31508C8.03105 10.0225 8.77473 11.8982 10.4405 13.5625C12.1063 15.2267 13.9789 16.0035 14.6863 15.2993L15.3589 14.6267C15.4764 14.4969 15.5415 14.328 15.5415 14.153C15.5415 13.9779 15.4764 13.8091 15.3589 13.6793L14.3689 12.6688Z"
                    class="icon-elem"
                  />
                  <path
                    class="circle"
                    d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21509 0.913451 7.4078C0.00519938 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0V0ZM12 18.3158C10.7645 18.3181 9.55595 17.955 8.52632 17.2721L6.09948 18.0489L6.88895 15.7026C6.20698 14.7602 5.79853 13.6478 5.70865 12.488C5.61878 11.3282 5.85096 10.1661 6.37961 9.12983C6.90826 8.09361 7.71282 7.22351 8.70457 6.61552C9.69632 6.00752 10.8367 5.68523 12 5.68421C13.6751 5.68421 15.2815 6.34962 16.4659 7.53406C17.6504 8.7185 18.3158 10.3249 18.3158 12C18.3158 13.6751 17.6504 15.2815 16.4659 16.4659C15.2815 17.6504 13.6751 18.3158 12 18.3158Z"
                  />
                </svg>
                `
            );
            break;
          case "Instagram":
            modalCurrent.insertAdjacentHTML(
              "beforeend",
              `
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="12" cy="12.5" rx="9" ry="9.5" class="icon" />
                <path
                  d="M11.9979 13.8942C13.0452 13.8942 13.8942 13.0452 13.8942 11.9979C13.8942 10.9506 13.0452 10.1016 11.9979 10.1016C10.9506 10.1016 10.1016 10.9506 10.1016 11.9979C10.1016 13.0452 10.9506 13.8942 11.9979 13.8942Z"
                  class="icon-elem"
                />
                <path
                  d="M14.426 7.20703H9.57545C8.94731 7.20703 8.34489 7.45656 7.90073 7.90073C7.45656 8.34489 7.20703 8.94731 7.20703 9.57545V14.4244C7.20703 15.0525 7.45656 15.655 7.90073 16.0991C8.34489 16.5433 8.94731 16.7928 9.57545 16.7928H14.426C15.0541 16.7928 15.6565 16.5433 16.1007 16.0991C16.5449 15.655 16.7944 15.0525 16.7944 14.4244V9.57387C16.794 8.946 16.5443 8.34399 16.1002 7.90017C15.656 7.45634 15.0539 7.20703 14.426 7.20703ZM12.0007 15.1034C11.3867 15.1037 10.7864 14.9219 10.2757 14.581C9.76499 14.2401 9.36687 13.7554 9.13167 13.1882C8.89648 12.621 8.83478 11.9968 8.95438 11.3945C9.07398 10.7922 9.3695 10.239 9.80357 9.80469C10.2376 9.3704 10.7908 9.07459 11.393 8.95469C11.9952 8.83478 12.6194 8.89617 13.1867 9.13107C13.754 9.36597 14.2389 9.76385 14.5801 10.2744C14.9213 10.7849 15.1034 11.3851 15.1034 11.9991C15.1025 12.8219 14.7754 13.6107 14.1938 14.1927C13.6122 14.7746 12.8235 15.1021 12.0007 15.1034ZM15.1223 9.6623C14.9704 9.66261 14.8218 9.61783 14.6954 9.53363C14.5689 9.44943 14.4703 9.3296 14.4121 9.18932C14.3538 9.04903 14.3385 8.89461 14.368 8.74561C14.3976 8.59661 14.4707 8.45973 14.5781 8.35232C14.6855 8.2449 14.8224 8.17179 14.9714 8.14223C15.1204 8.11267 15.2748 8.128 15.4151 8.18627C15.5554 8.24455 15.6752 8.34315 15.7594 8.46958C15.8436 8.59602 15.8884 8.7446 15.8881 8.89651C15.8877 9.09948 15.8069 9.29402 15.6633 9.43754C15.5198 9.58106 15.3253 9.66188 15.1223 9.6623Z"
                  class="icon-elem"
                />
                <path
                  d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519938 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6688 1.83649 18.807 3.51472 20.4853C5.19296 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472C18.2349 1.26428 15.1826 0 12 0V0ZM18 14.4253C17.9992 15.3731 17.6223 16.2818 16.9521 16.9521C16.2819 17.6223 15.3731 17.9992 14.4253 18H9.57474C8.62705 17.9987 7.71853 17.6217 7.04841 16.9516C6.37829 16.2815 6.00126 15.373 6.00001 14.4253V9.57473C6.00126 8.62704 6.37829 7.71852 7.04841 7.0484C7.71853 6.37828 8.62705 6.00125 9.57474 6H14.4253C15.373 6.00125 16.2815 6.37828 16.9516 7.0484C17.6217 7.71852 17.9988 8.62704 18 9.57473V14.4253Z"
                  class="circle"
                />
              </svg>
                  `
            );
            break;
          case "Telegram":
            modalCurrent.insertAdjacentHTML(
              "beforeend",
              `
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_707_937)">
                    <ellipse cx="11.75" cy="12" rx="9.25" ry="8" class="icon" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12ZM12.43 8.859C11.263 9.344 8.93 10.349 5.432 11.873C4.864 12.099 4.566 12.32 4.539 12.536C4.493 12.902 4.951 13.046 5.573 13.241C5.658 13.268 5.746 13.295 5.836 13.325C6.449 13.524 7.273 13.757 7.701 13.766C8.09 13.774 8.524 13.614 9.003 13.286C12.271 11.079 13.958 9.964 14.064 9.94C14.139 9.923 14.243 9.901 14.313 9.964C14.383 10.026 14.376 10.144 14.369 10.176C14.323 10.369 12.529 12.038 11.599 12.902C11.309 13.171 11.104 13.362 11.062 13.406C10.968 13.503 10.872 13.596 10.78 13.685C10.21 14.233 9.784 14.645 10.804 15.317C11.294 15.64 11.686 15.907 12.077 16.173C12.504 16.464 12.93 16.754 13.482 17.116C13.622 17.208 13.756 17.303 13.887 17.396C14.384 17.751 14.831 18.069 15.383 18.019C15.703 17.989 16.035 17.688 16.203 16.789C16.6 14.663 17.382 10.059 17.563 8.161C17.574 8.00341 17.5673 7.84509 17.543 7.689C17.5285 7.56293 17.4671 7.44693 17.371 7.364C17.228 7.247 17.006 7.222 16.906 7.224C16.455 7.232 15.763 7.473 12.43 8.859Z"
                      class="circle"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_707_937">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                  `
            );
            break;
          case "Facebook":
            modalCurrent.insertAdjacentHTML(
              "beforeend",
              `
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="12" cy="12.25" rx="7.5" ry="8.75" class="icon" />
                  <path
                    d="M12 0C9.62663 0 7.30656 0.703788 5.33317 2.02236C3.35977 3.34094 1.8217 5.21509 0.913452 7.4078C0.00519939 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.8071 3.51473 20.4853C5.19296 22.1635 7.33115 23.3064 9.65893 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0866C18.7849 22.1783 20.6591 20.6402 21.9777 18.6668C23.2962 16.6935 24 14.3734 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2349 1.26428 15.1826 0 12 0V0ZM15.0411 10.8632L14.8421 12.5353C14.8335 12.6129 14.7965 12.6845 14.7382 12.7364C14.6799 12.7883 14.6044 12.8168 14.5263 12.8163H12.7895V17.7742C12.7899 17.8334 12.7669 17.8904 12.7255 17.9327C12.6841 17.975 12.6276 17.9992 12.5684 18H10.8C10.7706 17.9996 10.7415 17.9934 10.7144 17.9817C10.6874 17.9701 10.6629 17.9532 10.6424 17.9321C10.6219 17.911 10.6057 17.886 10.5948 17.8587C10.5839 17.8313 10.5785 17.8021 10.579 17.7726L10.5884 12.8163H9.27317C9.18942 12.8163 9.10909 12.783 9.04987 12.7238C8.99065 12.6646 8.95738 12.5843 8.95738 12.5005V10.83C8.95738 10.7462 8.99065 10.6659 9.04987 10.6067C9.10909 10.5475 9.18942 10.5142 9.27317 10.5142H10.579V8.89421C10.579 7.02 11.6953 6 13.3263 6H14.6637C14.7475 6 14.8278 6.03327 14.887 6.09249C14.9462 6.15171 14.9795 6.23204 14.9795 6.31579V7.72263C14.9795 7.80638 14.9462 7.88671 14.887 7.94593C14.8278 8.00515 14.7475 8.03842 14.6637 8.03842H13.8442C12.9569 8.05263 12.7895 8.47737 12.7895 9.11211V10.5095H14.7348C14.7788 10.5105 14.8222 10.5207 14.862 10.5395C14.9019 10.5582 14.9374 10.5851 14.9663 10.6184C14.9951 10.6518 15.0167 10.6907 15.0296 10.7329C15.0425 10.775 15.0464 10.8194 15.0411 10.8632Z"
                    class="circle"
                  />
                </svg>
                  `
            );
            break;
        }
      }
    });
  }

  if (!form) {
    console.error("Нет такого селектора!");
    return false;
  }

  if (!rules) {
    console.error("Вы не передали правила валидации!");
    return false;
  }

  if (telSelector) {
    intlTelInput(telSelector, {
      initialCountry: "ua",
      nationalMode: false,
      autoHideDialCode: false,
      autoPlaceholder: "polite",
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.0/js/utils.js",
    });
  }

  const validation = new JustValidate(selector, options, translation);

  if (translation && locale) {
    validation.setCurrentLocale(locale);
  }

  for (let item of rules) {
    validation.addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess(async (event) => {
    let formData = new FormData(event.target);
    formData = Object.fromEntries(formData);
    formBtn.disabled = true;

    // search and remove old error messages
    const errorMessages = form.querySelectorAll(".validate__error");
    errorMessages.forEach((errNode) => errNode.remove());

    for (let key in formData) {
      if (formData[key] === "on") {
        formData[key] = true;
      } else if (formData[key] === "off") {
        formData[key] = false;
      }
    }

    if (selector === ".modal__join") {
      const response = await fetch("https://ucliq.com/api/subscribe", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      formBtn.disabled = false;

      if (response.status < 199 || response.status > 300) {
        const errorMessage = form.querySelector(".modal__form-status--error");

        errorMessage.style.display = "block";

        // get answer from server
        const errorResponseObj = await response.json();

        const errors = errorResponseObj.violations.reduce((acc, err) => {
          if (acc.hasOwnProperty(err.propertyPath)) {
            acc[err.propertyPath] = [...acc[err.propertyPath], err.message];
          } else {
            acc[err.propertyPath] = [err.message];
          }

          return acc;
        }, {});

        for (const key in errors) {
          const input = form.querySelector(`[name='${key}']`);
          input.style.border = "1px solid rgb(184, 17, 17)";
          errors[key].forEach((err) => {
            input.insertAdjacentHTML(
              "afterend",
              `<div
                    class="validate__error"
                  >
                    ${err}
                  </div>`
            );
          });
        }

        setTimeout(() => {
          errorMessage.style.display = "";
        }, 5000);
        console.error("Ошибка при отправке!");
        // onFailSend();
        return false;
      } else {
        const btnHide = form.querySelector(".btn--hide");
        btnHide.click();
        const subscribeBtns = document.querySelectorAll(".modal-join");
        const modalSpam = document.querySelector(".modal--spam");
        subscribeBtns.forEach((btn) => {
          btn.removeEventListener("click", subscribe);
          btn.addEventListener("click", () => {
            modalSpam.classList.add("show");
          });
        });
      }
      formBtn.disabled = false;
      console.log("Отправлено");
      event.target.reset();
    } else if (selector === ".modal__register") {
      if (!formData.hasOwnProperty("newsletterSubscriber")) {
        formData.newsletterSubscriber = false;
      }
      formData.im = socialNetwork;

      const response = await fetch("https://ucliq.com/api/demo", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      formBtn.disabled = false;

      if (response.status < 199 || response.status > 300) {
        const errorMessage = form.querySelector(".modal__form-status--error");

        errorMessage.style.display = "block";

        // get answer from server
        const errorResponseObj = await response.json();

        const errors = errorResponseObj.violations.reduce((acc, err) => {
          if (acc.hasOwnProperty(err.propertyPath)) {
            acc[err.propertyPath] = [...acc[err.propertyPath], err.message];
          } else {
            acc[err.propertyPath] = [err.message];
          }

          return acc;
        }, {});

        for (const key in errors) {
          const input = form.querySelector(`[name='${key}']`);
          input.style.border = "1px solid rgb(184, 17, 17)";
          errors[key].forEach((err) => {
            input.insertAdjacentHTML(
              "afterend",
              `<div
                    class="validate__error"
                  >
                    ${err}
                  </div>`
            );
          });
        }

        setTimeout(() => {
          errorMessage.style.display = "";
        }, 5000);
        console.error("Ошибка при отправке!");
        // onFailSend();
        return false;
      } else {
        const btnHide = form.querySelector(".btn--hide");
        btnHide.click();
        const demoBtn = document.querySelector(".modal-register");
        demoBtn.removeEventListener("click", demo);
        demoBtn.addEventListener("click", () => {
          const modalThanks = document.querySelector(".modal--thanks");
          modalThanks.classList.add("show");
        });
      }

      console.log("Отправлено");
      event.target.reset();
    } else if (selector === ".contact__form") {
      const response = await fetch("https://ucliq.com/api/feedback", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      formBtn.disabled = false;

      if (response.status < 199 || response.status > 300) {
        const errorMessage = form.querySelector(".modal__form-status--error");

        errorMessage.style.display = "block";

        // get answer from server
        const errorResponseObj = await response.json();

        const errors = errorResponseObj.violations.reduce((acc, err) => {
          if (acc.hasOwnProperty(err.propertyPath)) {
            acc[err.propertyPath] = [...acc[err.propertyPath], err.message];
          } else {
            acc[err.propertyPath] = [err.message];
          }

          return acc;
        }, {});

        for (const key in errors) {
          const input = form.querySelector(`[name='${key}']`);
          input.style.border = "1px solid rgb(184, 17, 17)";
          errors[key].forEach((err) => {
            input.insertAdjacentHTML(
              "afterend",
              `<div
                    class="validate__error"
                  >
                    ${err}
                  </div>`
            );
          });
        }

        setTimeout(() => {
          errorMessage.style.display = "";
        }, 5000);
        console.error("Ошибка при отправке!");
        // onFailSend();
        return false;
      } else {
        const thanksNode = document.querySelector(".contact__thanks");
        form.style.display = "none";
        thanksNode.style.display = "flex";
      }

      console.log("Отправлено");
      event.target.reset();
    } else if (selector === ".blog__form-inner") {
      const response = await fetch("https://ucliq.com/api/subscribe", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      formBtn.disabled = false;

      if (response.status < 199 || response.status > 300) {
        const errorMessage = form.querySelector(".modal__form-status--error");

        errorMessage.style.display = "block";

        // get answer from server
        const errorResponseObj = await response.json();

        const errors = errorResponseObj.violations.reduce((acc, err) => {
          if (acc.hasOwnProperty(err.propertyPath)) {
            acc[err.propertyPath] = [...acc[err.propertyPath], err.message];
          } else {
            acc[err.propertyPath] = [err.message];
          }

          return acc;
        }, {});

        for (const key in errors) {
          const input = form.querySelector(`[name='${key}']`);
          input.style.border = "1px solid rgb(184, 17, 17)";
          errors[key].forEach((err) => {
            input.insertAdjacentHTML(
              "afterend",
              `<div
                    class="validate__error"
                  >
                    ${err}
                  </div>`
            );
          });
        }

        setTimeout(() => {
          errorMessage.style.display = "";
          formBtn.disabled = false;
        }, 5000);
        console.error("Ошибка при отправке!");
        // onFailSend();
        return false;
      } else {
        const thanksNode = document.querySelector(".contact__thanks");
        document.querySelector(".blog__form").style.display = "none";
        thanksNode.style.display = "flex";
      }

      console.log("Отправлено");
      event.target.reset();
    }
  });

  validation.onFail((fields) => {
    console.log("fields", fields);
  });
};
