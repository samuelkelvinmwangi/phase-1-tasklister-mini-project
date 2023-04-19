document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e,preventDefault()
    newTask(e.target.new-task-description.value)
    form.reset()
  })
})

function newTask(task){
  let label = document.createElement('label')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)

    btn.textContent = 'x'

    label.textContent = ` ${task} `
    label.appendChild(btn)

    console.log(label)

    document.querySelector('label[for="new-task-description"]').appendChild(label)
}

function handleDelete(e){
    e.target.parentNode.remove()
}