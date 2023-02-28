<template>
    <div class="app">
		<div class="chapter">
			<table>
				<tr>
					<td><span class="centrtext">Поиск по названию вложения</span></td>
				</tr>
				<tr>
					<td><input id='item' v-model='searchItem' placeholder='поиск' @input="search"/></td>
				</tr>
				<tr v-if="result.notfound">
					<td><span class="p-green">Я ничего не смог найти :(</span></td>
				</tr>
			</table>
		</div>

		<div class="chapter" v-if="recommends.length > 0">
				РЕКОМЕНДАЦИИ 
				<span class="p-green">кликни, чтобы выбрать</span>
				<div class="recommends">
					<div class="recommend" v-for="(item, index) in recommends" :key="index" @click="select(item)">
						<div class="itemName" style="font-weight: bold;"> {{item.itemName}} </div>
						<div class="text-small"> {{item.category}} </div>
					</div>
				</div>
		</div>

		<div class="chapter" v-if="result.pack">
			<div class="info" v-if="result.aboutItem">
				<div class="p-green">Описание вложения:</div>
				<div v-html="result.aboutItem"></div>
			</div>

			<div class="info" v-if="result.pack">
				<div class="p-green">Подходящая упаковка:</div>
				<div>{{result.pack}}</div>
			</div>

			<div class="info" v-if="result.method">
				<div class="p-green">Подходящий метод упаковки:</div>
				<div v-html="result.method"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import axios from 'axios'
import { ref, reactive } from 'vue';

const searchItem = ref(null);

const recommends = ref([]);
const result = reactive({
	notfound: false,
	char: null,
	aboutItem: null,
	method: null,
	pack: null
})

const search = () => {
	result.notfound = false;
	recommends.value = [];

	result.char = null;
	result.aboutItem = null;
	result.method = null;
	result.pack = null;

	if (searchItem.value.length >= 3){
		axios.post('/api/pack/get', {
			item: searchItem.value
		})
		.then(response => {
			if (response.data.length){
				result.notfound = false;
				recommends.value = response.data
			}else{
				result.notfound = true;
			}
		})
	}
}

const select = (item) => {
	result.char = item.char;
	result.aboutItem = item.aboutItem;
	result.method = item.method;
	result.pack = item.pack;
}

</script>