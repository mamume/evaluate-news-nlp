import { handleSubmit } from './js/handleSubmit'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('#submit-btn')
    submitBtn.addEventListener('click', handleSubmit)
})