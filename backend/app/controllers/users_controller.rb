class UsersController < ApplicationController

    require 'securerandom'
    
    skip_before_action :logged_in?, only: [:signup, :login]
    skip_before_action :verify_authenticity_token
    
    def create
        
    end


    def signup
        @families = Family.all
        # byebug
        if user_params[:family_id] == false
            @family = Family.create({family_pin: SecureRandom.uuid})
            # user_params[:family_id] = @family.id
        else
            @family = @families.find_by(family_pin: user_params[:family_id])
            @wallet = Wallet.new(amount: 0)
            @creditline = CreditLine.create(amount: 500)
            @creditscore = CreditScore.create(score: 800)
        end

        @user = User.new(user_params)
            @user.family_id = @family.id
            # byebug
            if @user.valid? 
                @user.save
                    if @wallet 
                        #links to childs user account
                        @wallet.user_id = @user.id
                        @creditline.user_id = @user.id
                        @creditscore.user_id = @user.id
                        #saves the new models
                        @wallet.save
                        @creditline.save
                        @creditscore.save
                    end 
                render json: {user: UserSerializer.new(@user).as_json}, status: :created
                # byebug
            else
                errors_message = @user.errors.messages
                render json: {error: "Failed to create a user"}, status: :not_acceptable
                @family.destroy
            end
            # byebug
    end

    def login
        # byebug
        user = User.find_by(username: params[:username])

        if user && user.authenticate(params[:password])
            render json: {username: user.username, role: user.role, token: encode_token({user_id: user.id})}
        else
            render json: {error: "invalid username or password"}
        end
    end


    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :role, :email, :firstname, :lastname, :family_id)
    end

    # params.require(:user).permit(:username, :password, :password_confirmation, :role, :email, :firstname, :lastname, :family_id)



end
