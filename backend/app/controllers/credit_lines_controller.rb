class CreditLinesController < ApplicationController

    def show
        @credit_line = CreditLine.find(params[:id])
        render json: @credit_line
    end
end
