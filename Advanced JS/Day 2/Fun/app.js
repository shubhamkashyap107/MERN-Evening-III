const container = document.getElementById("root")

const users = [
  {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  
    {
    name: "Aanya Mehra",
    age: 25,
    bio: "Adventure seeker who loves hiking and spontaneous road trips.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rohan Kapoor",
    age: 28,
    bio: "Tech enthusiast, coffee lover, and weekend guitarist.",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    name: "Sneha Iyer",
    age: 24,
    bio: "Bookworm with a soft spot for mystery novels and rainy days.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Kabir Verma",
    age: 30,
    bio: "Fitness trainer by day, Netflix binge-watcher by night.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Tanvi Sharma",
    age: 26,
    bio: "Designer with a passion for minimalism and good chai.",
    image: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  

]

for(let item of users)
{
    let card = document.createElement("div")
    card.setAttribute("class", "card")
    let image = document.createElement("img")
    let textContainer = document.createElement("div")
    let nameTag = document.createElement("h2")
    let bioTag = document.createElement("p")
    bioTag.style.color = "red"
    // image.setAttribute("src", item.image)
    image.src = item.image
    nameTag.innerText = `${item.name}, ${item.age}`
    bioTag.innerText = item.bio
    card.appendChild(image)
    card.appendChild(textContainer)
    textContainer.appendChild(nameTag)
    textContainer.appendChild(bioTag)

    container.appendChild(card)
}