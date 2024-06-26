const groups = document.querySelectorAll(".card-group");
let activeIndex = 0;

const handleLoveClick =()=>{
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
  nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  currentGroup.dataset.status = "after";
  nextGroup.dataset.status = "becoming-active-from-before";
  setTimeout(()=>{
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  })
}

const handleHateClick =()=>{
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
  nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  currentGroup.dataset.status = "before";
  nextGroup.dataset.status = "becoming-active-from-after";
  setTimeout(()=>{
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  })
}
