export interface Track {
  _id: string
  objectId?: string
  name: string
  duration_ms: number
  album: Album
  comments: CommentData[],
  spotifyId: string,
  preview_url: string,
  longitude?: number;
  latitude?: number;
  accuracy?: number;
  userId: string;
}

export interface Album {
  artists: Artist[]
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
}

export interface Artist {
  id: string
  name: string
}

export interface Image {
  height: number
  url: string
  width: number
}

export interface CommentData {
  _id: string;
  rating: number;
  author: string;
  comment: string;
  createdOn: Date;
  latitude?: number;
  longitude?: number;
  accuracy?: number;
  userId: string;
}
