<x-guest-layout>
    <x-jet-authentication-card>
        <x-slot name="logo">
            <x-jet-authentication-card-logo />
        </x-slot>

        <x-jet-validation-errors class="mb-4" />

        <form method="POST" action="{{ route('register') }}">
            @csrf

            <div>
                <x-jet-label for="name" value="{{ __('Name') }}" />
                <x-jet-input id="name" class="block mt-1 w-full" type="text" name="name" :value="old('name')" required autofocus autocomplete="name" />
            </div>

            <div class="mt-4">
                <x-jet-label for="email" value="{{ __('Email') }}" />
                <x-jet-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required />
            </div>

            <div class="mt-4">
                <x-jet-label for="gender" value="{{ __('Gender') }}" />
                <select class="block mt-1 w-full" id="gender" name="gender" required>
                    <option value="" disabled selected hidden>Select your gender</option>
                    <option value="Unspecified">Unspecified</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <div class="mt-4">
                <x-jet-label for="weight" value="{{ __('Weight (kg)') }}" />
                <x-jet-input id="weight" class="block mt-1 w-full" type="number" name="weight" :value="old('weight')" required/>
            </div>

            <div class="mt-4">
                <x-jet-label for="height" value="{{ __('Height (cm)') }}" />
                <x-jet-input id="height" class="block mt-1 w-full" type="number" name="height" :value="old('height')" required/>
            </div>

            <div class="mt-4">
                <x-jet-label for="activity" value="{{ __('Activity level') }}" />
                <select class="block mt-1 w-full" id="activity" name="activity" required>
                    <option value="" disabled selected hidden>Select your activity level</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                </select>
            </div>



            <div class="mt-4">
                <x-jet-label for="household_id" value="{{ __('Household ID') }}" />
                <x-jet-input id="household_id" class="block mt-1 w-full" type="text" name="household_id" :value="old('household_id')" required/>
                <input type="checkbox" id="new-household-id">
                <label for="new-household-id">Create a new household</label>
            </div>

            <script type="text/javascript">
                $(document).on('change', '#new-household-id', function () {
                    if (this.checked) {
                        $("#household_id").prop('readonly', true);
                        $("#household_id").val(Math.random().toString(36).substr(2, 9));
                    }
                    else {
                        $("#household_id").prop('readonly', false);
                        $("#household_id").val('');
                    }
                });
            </script>


            <div class="mt-4">
                <x-jet-label for="password" value="{{ __('Password') }}" />
                <x-jet-input id="password" class="block mt-1 w-full" type="password" name="password" required autocomplete="new-password" />
            </div>

            <div class="mt-4">
                <x-jet-label for="password_confirmation" value="{{ __('Confirm Password') }}" />
                <x-jet-input id="password_confirmation" class="block mt-1 w-full" type="password" name="password_confirmation" required autocomplete="new-password" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('login') }}">
                    {{ __('Already registered?') }}
                </a>

                <x-jet-button class="ml-4">
                    {{ __('Register') }}
                </x-jet-button>
            </div>
        </form>
    </x-jet-authentication-card>
</x-guest-layout>
