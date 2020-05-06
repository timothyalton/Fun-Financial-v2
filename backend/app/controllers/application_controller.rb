class ApplicationController < ActionController::Base

    before_action :logged_in?

   def encode_token(payload)
        # byebug
        JWT.encode(payload, "se012720", "HS256") #alg is optional
   end

   def logged_in?
        headers = request.headers["Authorization"]
        token = headers.split(" ")[1] 
        
        begin
            user_id = JWT.decode(token, "se012720")[0]["user_id"]
            user = User.find(user_id)
        rescue 
            user = nil
        # ensure 
            # this will always run even with an error 
        end


        render json: {error: "Please log in"} unless user
            
   end
end
