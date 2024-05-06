// Functions
import { validateForms } from "../functions/validate-forms";

export const formValidation = () => {
  const blogForm = document.querySelector(".blog__form-inner");
  const joinForm = document.querySelector(".modal__join");
  const registerForm = document.querySelector(".modal__register");
  const contactForm = document.querySelector(".contact__form");

  if (joinForm) {
    validateForms(
      ".modal__join",
      [
        {
          ruleSelector: ".modal__join-name",
          rules: [
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
        {
          ruleSelector: ".modal__join-email",
          rules: [
            {
              rule: "email",
              errorMessage: "Email is not valid",
            },
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
        {
          ruleSelector: ".modal__join-checkbox",
          rules: [
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
      ],
      null,
      null,
      null,
      null,
      null
    );
  }

  if (blogForm) {
    validateForms(
      ".blog__form-inner",
      [
        {
          ruleSelector: ".modal__join-name",
          rules: [
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
        {
          ruleSelector: ".modal__join-email",
          rules: [
            {
              rule: "email",
              errorMessage: "Email is not valid",
            },
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
        {
          ruleSelector: ".modal__join-checkbox",
          rules: [
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
      ],
      null,
      null,
      null,
      null,
      null
    );
  }

  if (registerForm) {
    validateForms(
      ".modal__register",
      [
        {
          ruleSelector: ".modal__register-name",
          rules: [
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
        {
          ruleSelector: ".modal__register-email",
          rules: [
            {
              rule: "email",
              errorMessage: "Email is not valid",
            },
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
        {
          ruleSelector: ".modal__register-company",
          rules: [
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
        {
          ruleSelector: ".modal__register-policy",
          rules: [
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
      ],
      null,
      null,
      null,
      null,
      null
    );
  }

  if (contactForm) {
    validateForms(
      ".contact__form",
      [
        {
          ruleSelector: ".contact__form-name",
          rules: [
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
        {
          ruleSelector: ".contact__form-email",
          rules: [
            {
              rule: "email",
              errorMessage: "Email is not valid",
            },
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
        {
          ruleSelector: ".contact__form-message",
          rules: [
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
        {
          ruleSelector: ".contact__form-checkbox",
          rules: [
            {
              rule: "required",
              errorMessage: "This field is required",
            },
          ],
        },
      ],
      null,
      null,
      null,
      null,
      null
    );
  }
};
