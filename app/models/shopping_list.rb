class ShoppingList < ApplicationRecord
    has_many :shopping_list_items, dependent: :destroy
    belongs_to :user

    def total_amount
        self.shopping_list_items.sum {|i| i.item.total_cost }
    end

end
