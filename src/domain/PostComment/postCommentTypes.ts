export interface PostComment {
  id: number;
  message: string;
  created_at: string; //"2024-02-19T01:00:57.000-03:00",
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; //107,
  message: string; //"Confido vulnus curriculum vulnus quis coma clementia minus.",
  user_id: number; //3,
  post_id: number; //1,
  created_at: string; //"2024-02-19T01:00:57.000-03:00",
  updated_at: string; //"2024-02-20T11:35:16.084-03:00",
  user: {
    id: number; //3,
    first_name: string; //"Ana",
    last_name: string; //"Oliveira",
    username: string; //"aninha23",
    email: string; //"oliveiraana23@coffstack.com",
    profile_url: string; //"https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/7-ana.png",
    is_online: boolean; //false,
    full_name: string; //"Ana Oliveira"
  };
  meta: any; //{}
}
