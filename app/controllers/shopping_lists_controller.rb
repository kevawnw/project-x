class ShoppingListsController < ApplicationController
    before_action :find_list, only: [:update, :destroy]

    def show
        sl = ShoppingList.find_by!(id: params[:id])
        render json: sl
    end

    def index
        sl = ShoppingList.all.where(user_id: session[:user_id])
        render json: sl
    end

    def create
        count = ShoppingList.all.where(user_id: session[:user_id]).length
        sl = ShoppingList.create!(name: "Shopping-list-#{count + 1}", user_id: params[:user_id] ) #try to set a default user_id to sessions id
        render json: sl
    end

    def update
        @sl.update(params.permit(:name))
        render json: @sl
    end

    def destroy
        @sl.destroy
        render json: []
    end

    private
    def find_list
        @sl = ShoppingList.find_by!(id: params[:id])
    end

    
end
