const intialState = {
  musicData: [
    {
      id: 1,
      addedToLikes: false,
      author: "Arctic Monkeys",
      songName: "Do I Wanna Know?",
      img: "https://upload.wikimedia.org/wikipedia/ru/2/2a/Arctic_Monkeys_AM_cover.jpg",
    },
    {
      id: 2,
      addedToLikes: true,
      author: "Arctic Monkeys",
      songName: "505",
      img: "https://upload.wikimedia.org/wikipedia/ru/2/2a/Arctic_Monkeys_AM_cover.jpg",
    },
    {
      id: 3,
      addedToLikes: false,
      author: "Arctic Monkeys",
      songName: "Snap out of it",
      img: "https://upload.wikimedia.org/wikipedia/ru/2/2a/Arctic_Monkeys_AM_cover.jpg",
    },
    {
      id: 4,
      addedToLikes: true,
      author: "Arctic Monkeys",
      songName: "Arabella",
      img: "https://upload.wikimedia.org/wikipedia/ru/2/2a/Arctic_Monkeys_AM_cover.jpg",
    },
    {
      id: 5,
      addedToLikes: true,
      author: "Arctic Monkeys",
      songName: "Why'd You Only C...",
      img: "https://upload.wikimedia.org/wikipedia/ru/2/2a/Arctic_Monkeys_AM_cover.jpg",
    },
    {
      id: 6,
      addedToLikes: false,
      author: "Arctic Monkeys",
      songName: "R U Mine?",
      img: "https://upload.wikimedia.org/wikipedia/ru/2/2a/Arctic_Monkeys_AM_cover.jpg",
    },
    {
      id: 7,
      addedToLikes: true,
      author: "Arctic Monkeys",
      songName: "One for the Road",
      img: "https://upload.wikimedia.org/wikipedia/ru/2/2a/Arctic_Monkeys_AM_cover.jpg",
    },
    {
      id: 8,
      addedToLikes: false,
      author: "Arctic Monkeys",
      songName: "I wanna be yours",
      img: "https://upload.wikimedia.org/wikipedia/ru/2/2a/Arctic_Monkeys_AM_cover.jpg",
    },
    {
      id: 9,
      addedToLikes: true,
      author: "Arctic Monkeys",
      songName: "I Want It All",
      img: "https://upload.wikimedia.org/wikipedia/ru/2/2a/Arctic_Monkeys_AM_cover.jpg",
    },
    {
      id: 10,
      addedToLikes: true,
      author: "Arctic Monkeys",
      songName: "Mad Sounds",
      img: "https://upload.wikimedia.org/wikipedia/ru/2/2a/Arctic_Monkeys_AM_cover.jpg",
    },
  ],
};

export const MusicReducer = (state = intialState, action) => {
  if (action.type === "ADD-SONG-TO-FAVOURITE") {
    return {
      ...state,
      musicData: state.musicData.map((el) => {
        if (el.id === action.userId) {
          return { ...el, addedToLikes: true };
        }
        return el;
      }),
    };
  } else if (action.type === "REMOVE-SONG-FROM-FAVOURITE") {
    return {
      ...state,
      musicData: state.musicData.map((el) => {
        if (el.id === action.userId) {
          return { ...el, addedToLikes: false };
        }
        return el;
      }),
    };
  }
  return state;
};

export const addSongToFavourite = (userId) => ({
  type: "ADD-SONG-TO-FAVOURITE",
  userId: userId,
});

export const removeSongFromFavourite = (userId) => ({
  type: "REMOVE-SONG-FROM-FAVOURITE",
  userId: userId,
});
