class ShoppingListItemSerializer < ActiveModel::Serializer
  attributes  :id, :shopping_list_id, :showitem
  belongs_to :item
  belongs_to :shopping_list

  

  def showitem
    object.item
  end
end
